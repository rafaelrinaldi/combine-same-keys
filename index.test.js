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
