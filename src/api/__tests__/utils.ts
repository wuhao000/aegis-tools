import {SwaggerDoc} from '../../../types/swagger';
import {getConfig} from '../config';

export const config = getConfig();

export const data: SwaggerDoc = JSON.parse(require('fs').readFileSync('src/api/__tests__/data/api.json')
    .toString());
