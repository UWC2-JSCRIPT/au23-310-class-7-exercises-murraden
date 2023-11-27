describe('tests for the blackjack game', () => {
  it('should calculate the score of a hand', () => {
    const hand = [
        {displayVal: 'Six', val: 6, suit: 'hearts'},
        {displayVal: 'Seven', val: 7, suit: 'hearts'}
    ]

    const result = calcPoints(hand)

    expect(result.total).toEqual(13)
    expect(result.isSoft).toEqual(false)
  })
})

describe('tests if there is 1 ace in the hand && the hand is soft', () => {
  it('should tell us if the hand has a soft ace', () => {
    const hand = [
      {displayVal: 'Ace', val: 11, suit: 'hearts'},
      {displayVal: 'Seven', val: 7, suit: 'hearts'}
  ]

  const result = calcPoints(hand)

  expect(result.total).toEqual(18)
  expect(result.isSoft).toEqual(true)
  })
})

describe('tests if there is 1 ace in the hand && the hand is NOT soft', () => {
  it('should tell us if the hand has an ace and is NOT soft', () => {
    const hand = [
      {displayVal: 'Ace', val: 11, suit: 'hearts'},
      {displayVal: 'Seven', val: 7, suit: 'hearts'},
      {displayVal: 'Seven', val: 7, suit: 'clubs'}
  ]

  const result = calcPoints(hand)

  expect(result.total).toEqual(15)
  expect(result.isSoft).toEqual(false)
  })
})

describe('tests if there is multiple aces in the hand && the hand is soft', () => {
  it('should tell us if there is multiple aces in the hand && the hand is soft', () => {
    const hand = [
      {displayVal: 'Ace', val: 11, suit: 'hearts'},
      {displayVal: 'Ace', val: 11, suit: 'clubs'},
      {displayVal: 'Five', val: 5, suit: 'clubs'}
  ]

  const result = calcPoints(hand)

  expect(result.total).toEqual(17)
  expect(result.isSoft).toEqual(true)
  })
})

describe('tests if there is multiple aces in the hand && the hand is NOT soft', () => {
  it('should tell us if there is multiple aces in the hand && the hand is NOT soft', () => {
    const hand = [
      {displayVal: 'Ace', val: 11, suit: 'hearts'},
      {displayVal: 'Ace', val: 11, suit: 'clubs'},
      {displayVal: 'King', val: 10, suit: 'clubs'}
  ]

  const result = calcPoints(hand)

  expect(result.total).toEqual(12)
  expect(result.isSoft).toEqual(false)
  })
})