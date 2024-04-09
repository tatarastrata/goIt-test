// /[id] page;

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { IRoutingParams } from '../../types';

const RedirectPage: React.FC = () => {
  const router = useRouter();
  const { userId }: IRoutingParams = router.query;

  useEffect(() => {
    router.replace(`${userId}/requests`);
  }, [router, userId]);

  return null;
};

export default RedirectPage;
