import { RunNavigator } from '../src/classes/RunNavigator';
describe('Test RunNavigator class', () => {
  it('should be return "chemin en transport en commun de paris vers marseille"', () => {
    expect(RunNavigator.main1()).toBe('chemin en transport en commun de paris vers marseille')
  })
  it('should be return "Chemin par la route de paris vers marseille"', () => {
    expect(RunNavigator.main2()).toBe('Chemin par la route de paris vers marseille')
  })
})
