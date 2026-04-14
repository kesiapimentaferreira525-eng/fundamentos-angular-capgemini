import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCustomizado',
})
export class PipeCustomizadoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
