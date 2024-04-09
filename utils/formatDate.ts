import { format, isToday, isTomorrow, differenceInDays } from 'date-fns';

export interface IFormatDatePropTypes {
  date: Date | undefined;
  isExpanded?: boolean;
}
export const formatDate = ({
  date = new Date(),
  isExpanded = false,
}: IFormatDatePropTypes): string => {
  if (isExpanded) {
    return format(date, 'MMMM dd, yyyy');
  }

  if (isToday(date)) {
    return 'today';
  } else if (isTomorrow(date)) {
    return 'tomorrow';
  } else {
    const diffInDays = differenceInDays(date, new Date());
    if (diffInDays > 0 && diffInDays <= 7) {
      return `in ${diffInDays} days`;
    } else {
      return format(date, 'MMMM dd');
    }
  }
};
