import {Observable, Observer, from} from 'rxjs';
import {distinctUntilChanged} from 'rxjs/operators';

const observer: Observer<any> = {
    next: (value: any) => console.log('next: ', value),
    error: null,
    complete: () => console.info('complete')
};

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    }
]

from(personajes).pipe(
    distinctUntilChanged( (ant:Personaje, act:Personaje) => ant.nombre === act.nombre)
).subscribe(console.log);
