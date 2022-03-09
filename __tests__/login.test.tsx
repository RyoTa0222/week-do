import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Login from '@/pages/login'
import userEvent from '@testing-library/user-event'

describe('Login Page', () => {
  it('Should render correctly', () => {
    render(<Login />)
    expect(screen.getByTestId('login-page')).toBeInTheDocument()
  })
  it('Should make the login button inactive when email or password is not entered.', () => {
    render(<Login />)
    // 何も入力しない状態
    // 非活性状態になる
    expect(screen.getByTestId('login-button')).toBeDisabled()
    // メールとパスワードに文字を入力
    userEvent.type(
      screen.getByTestId('login-email-form'),
      'example@example.com'
    )
    userEvent.type(screen.getByTestId('login-password-form'), 'password')
    // 活性状態になる
    expect(screen.getByTestId('login-button')).not.toBeDisabled()
  })
})
