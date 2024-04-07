import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { IRoutingParams } from '../types/routes-types';
import { ERequestType } from '../types/request-types';

export const useNavigation = () => {
  const router = useRouter();
  const { userId: userIdFromRoute }: IRoutingParams = router.query;

  const goToNewRequestPage = useCallback(
    (userId: string) => {
      router.push(`/${userId}/create`);
    },
    [router],
  );

  const gotToRequestTypePage = useCallback(
    (requestType: ERequestType) => {
      router.push(`/${userIdFromRoute}/create/${requestType}`);
    },
    [router, userIdFromRoute],
  );

  const goToUserRequestsPage = useCallback(() => {
    router.push(`/${userIdFromRoute}/requests`);
  }, [router, userIdFromRoute]);

  const goToAllRequestsPage = useCallback(() => {
    router.push('/requests');
  }, [router]);

  const goToMain = useCallback(() => {
    router.push('/');
  }, [router]);

  return {
    goToMain,
    goToNewRequestPage,
    gotToRequestTypePage,
    goToUserRequestsPage,
    goToAllRequestsPage,
  };
};
