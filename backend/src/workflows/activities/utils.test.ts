import { describe, expect, it } from 'vitest'
import { verifyEmail } from './utils'

describe('verifyEmail', () => {
  it('accepts a valid email address', async () => {
    await expect(verifyEmail('jane.doe@example.com')).resolves.toBe(true)
  })

  it.each([
    'jane.doe',
    'jane.doe@',
    '@example.com',
    'jane.doe@example',
    'jane doe@example.com',
    'jane.doe@example .com',
  ])('rejects an invalid email address: %s', async (email) => {
    await expect(verifyEmail(email)).resolves.toBe(false)
  })
})
