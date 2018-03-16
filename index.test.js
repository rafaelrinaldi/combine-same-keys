import combineSameKeys from './'

test('Should combine values from existing keys', () => {
  const input = combineSameKeys(
    {
      foo: { color: 'red' },
      bar: { fontSize: 16 }
    },

    {
      foo: {
        backgroundColor: 'gold',
        lineHeight: 0
      }
    },

    { baz: { opacity: 1 } }
  )

  const output = {
    foo: {
      color: 'red',
      backgroundColor: 'gold',
      lineHeight: 0
    },

    bar: { fontSize: 16 },
    baz: { opacity: 1 }
  }

  expect(input).toEqual(output)
})

test('Should do nothing if no duplicates are found', () => {
  const data = {
    foo: { color: 'blue' },
    bar: { color: 'red' }
  }

  expect(combineSameKeys(data)).toEqual(data)
})

test('Should not mutate original objects', () => {
  const obj1 = { foo: { color: 'red' } }
  const obj2 = { foo: { lineHeight: 0 } }

  combineSameKeys(obj1, obj2)

  expect(obj1.foo).not.toHaveProperty('lineHeight')
  expect(obj2.foo).not.toHaveProperty('color')
})

