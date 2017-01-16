import { PipeTransform, Pipe } from '@angular/core';

import { Team } from './team';

@Pipe ({
    name:'teamFilter'
})
export class TeamFilterPipe implements PipeTransform{

    transform (value: Team[], filterBy: string): Team[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null ;
        return (filterBy ? value.filter((team : Team) =>
            (team.teamName.toLocaleLowerCase().indexOf(filterBy) !== -1) ): value);
    }
}
