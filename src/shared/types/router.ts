import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fsd-inspector/layers-restriction
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
