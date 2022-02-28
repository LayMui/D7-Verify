import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

import { ensure, isNotBlank } from 'tiny-types';

export class Actors implements Cast {
    constructor(private readonly baseApiUrl: string) {
        ensure('apiUrl', baseApiUrl, isNotBlank());
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.at(process.env.WEATHER_SERVICE_BASE_URL),
            TakeNotes.usingAnEmptyNotepad(),
        );
    }

}

