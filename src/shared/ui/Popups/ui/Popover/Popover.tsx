import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className, trigger, direction = 'bottom left', children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HPopover className={classNames(popupCls.popup, {}, [className])}>
            <HPopover.Button
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
