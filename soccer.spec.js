describe('tests for the soccer game ', () => {
    describe('tests for the getTotalPoints function', () => {

        it('shoud return an acurate total score for a string imput', () => {
            const result = getTotalPoints('wwdlw')

            expect(result).toEqual(10)
        })
    })

    describe('tests for the orderTeams function', () => {
        it('should log to the console the team name and number of points', () => {
            const Sounders = { name: 'Sounders', results: 'wwdlw' };
            const Galaxy = { name: 'Galaxy', results: 'ldwwd' };
            const Timbers = { name: 'Timbers', results: 'lldlw' };
          
            const result = orderTeams(Sounders, Galaxy, Timbers);
          
            expect(result).toBe('Sounders: 10\nGalaxy: 8\nTimbers: 4');
          
        })
    })
})

