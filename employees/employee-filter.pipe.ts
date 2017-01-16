import { PipeTransform, Pipe } from '@angular/core';

import { Employee } from './employee';

@Pipe ({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform{

    transform (value: Employee[], filterBy: string): Employee[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null ;
        return (filterBy ? value.filter((employee : Employee) =>
            (employee.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1) ||
             (employee.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1)) : value)             ;
    }
}
