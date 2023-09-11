import { expect, test } from 'vitest'

test('o usuário consegue cirar uma nova transação', () => {
  const responseStatuscode = 201

  expect(responseStatuscode).toEqual(201)
})
