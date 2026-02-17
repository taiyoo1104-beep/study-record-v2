import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { expect, test, describe, vi } from 'vitest'
import App from './App'

describe('学習時間管理アプリの動作確認', () => {

  test('タイトル「学習時間管理」が表示されていること', () => {
    render(<App />)
    expect(screen.getByText(/学習時間管理/i)).toBeInTheDocument()
  })

  test('新規登録を押すと、表に新しい行が追加される', async () => {
    render(<App />)

    // 重複を避けるため、名前に実行時のミリ秒秒を足してユニークにする
    const uniqueTitle = `テスト用-${Date.now()}`
    
    const titleInput = screen.getByPlaceholderText('学習内容を入力')
    const timeInput = screen.getByPlaceholderText('学習時間を入力')
    const submitButton = screen.getByRole('button', { name: /新規登録/i })

    fireEvent.change(titleInput, { target: { value: uniqueTitle } })
    fireEvent.change(timeInput, { target: { value: '7' } })
    fireEvent.click(submitButton)

    // まったく新しい名前を探すので、複数見つかるエラー（Multiple elements）を回避できます
    const newRecord = await screen.findByText(uniqueTitle)
    expect(newRecord).toBeInTheDocument()
  })

test('「削除」ボタンを押してアラートで「はい」を選ぶと、その行が消える', async () => {
    render(<App />)

    // 1. window.confirm をモック化し、常に true (はい) を返すように設定
    const confirmMock = vi.spyOn(window, 'confirm').mockImplementation(() => true)

    // 2. テスト用のユニークなデータを登録
    const targetTitle = `削除テスト用-${Date.now()}`
    fireEvent.change(screen.getByPlaceholderText('学習内容を入力'), { target: { value: targetTitle } })
    fireEvent.change(screen.getByPlaceholderText('学習時間を入力'), { target: { value: '3' } })
    fireEvent.click(screen.getByRole('button', { name: /新規登録/i }))

    // 3. データが画面に現れるのを待つ
    const newRowCell = await screen.findByText(targetTitle)
    const deleteButton = newRowCell.closest('tr').querySelector('button')

    // 4. 削除ボタンをクリック（ここで confirmMock が作動します）
    fireEvent.click(deleteButton)

    // 5. 確認ダイアログが表示されたことを検証
    expect(confirmMock).toHaveBeenCalledWith(expect.stringContaining('削除'))

    // 6. 画面からそのユニークな名前が消えるのを待つ
    await waitFor(() => {
      expect(screen.queryByText(targetTitle)).not.toBeInTheDocument()
    }, { timeout: 4000 })

    // 7. 後片付け（モックを元に戻す）
    confirmMock.mockRestore()
  })

  test('入力をしないで登録を押すと、アラートが表示される', () => {
    render(<App />)
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const submitButton = screen.getByRole('button', { name: /新規登録/i })
    fireEvent.click(submitButton)
    expect(alertMock).toHaveBeenCalled()
    alertMock.mockRestore()
  })
})