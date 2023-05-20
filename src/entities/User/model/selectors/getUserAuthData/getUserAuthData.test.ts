import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';
import { User } from '../../types/user';

describe('getUserAuthData.test', () => {
    test('should return data', () => {
        const data: User = {
            id: '1',
            username: 'admin',
        };

        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });
});
