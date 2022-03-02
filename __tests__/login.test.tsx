import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

initTestHelpers()

// 認証URL
const AUTH_API =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPasswordz'

const handler = [
  rest.post(AUTH_API, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        kind: 'identitytoolkit#VerifyPasswordResponse',
        localId: 'oeZzebkesyRrVbYmz43ZT70vsdf2',
        email: 'ryotanny@gmail.com',
        displayName: '',
        idToken:
          'eyJhbGciOiJSUzI1NiIsImtpZCI6ImNmNWQ4ZTc0ZjNjNDg2ZWU1MDNkNWVlYzkzYTEwMWM2NGJhY2Y3ZGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vd2Vlay1kby1kZDQzYyIsImF1ZCI6IndlZWstZG8tZGQ0M2MiLCJhdXRoX3RpbWUiOjE2NDYyMzIxODcsInVzZXJfaWQiOiJvZVp6ZWJrZXN5UnJWYlltejQzWlQ3MHZzZGYyIiwic3ViIjoib2VaemVia2VzeVJyVmJZbXo0M1pUNzB2c2RmMiIsImlhdCI6MTY0NjIzMjE4NywiZXhwIjoxNjQ2MjM1Nzg3LCJlbWFpbCI6InJ5b3Rhbm55QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJyeW90YW5ueUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.FH9ptyljNoCdtxfpuI9ztmyA9lNH18BTHk9aXeX4Y41fQstONY1aKBpCIN3XoYUFvvG0KUdnCzStzNnLlwfaAS3vE3I-f2IY2oqXfr2W2uhTyuWETZzb-nc090Ih883rvFZgx8Ax8fcWvJ35VSs-tdAsvGslaurJ8al44IPzGBjlwpGTnFomBenqgiDUSGAkh0iOIdaV_7Dt38e73xceJ4IYsaU-ZWmmVzlVKQ3D5vfYOTISpCSqJvNvLHTPD-himC2LJxhCLpXHCEsy2lowqqSm-_UizTFFpjBqf3mzzO2Vc6JKJ8IZbS3DUdWfl9SSWKiJ9Y__ZNL5LzawliEnfw',
        registered: true,
        refreshToken:
          'AIwUaOkyuzpQD8fQaEg-OI3N1Zo3y5Coqwzcyctrb5qs3bkmgvR2ByfQFeuZIkXw3xuoBra0nSY6s1o9lpZ5JDPxbG2Drcws10KfDmkZMAU64FTEeIvFntVMqy8Axus4deobHVAg0g88PQoDBKCJKRvO6Zj0WdzVsbvVllmz7Gk_kn0OquNZ6qg97Zx4GqXpmrLlWcfIrTMQSb9rGH6kcwZxBSPCh7QlMA',
        expiresIn: '3600',
      })
    )
  }),
]

const server = setupServer(...handler)

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => server.close())

describe('Sign In Test Cases', () => {
  it('Should transition to the login screen when not authenticated', async () => {
    console.log('a')
    const { page } = await getPage({
      route: '/test',
    })
    console.log('b')
    render(page)
    // expect(await screen.findByTestId('login-page')).toBeInTheDocument()
  })
})
