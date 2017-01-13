import { PipeTransform, Pipe } from '@angular/core';

import { ITeam } from './team';

@Pipe ({
    name:'teamFilter'
})
export class TeamFilterPipe implements PipeTransform{

    transform (value: ITeam[], filterBy: string): ITeam[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null ;
        return (filterBy ? value.filter((team : ITeam) =>
            (team.teamName.toLocaleLowerCase().indexOf(filterBy) !== -1) ): value);
    }
}
