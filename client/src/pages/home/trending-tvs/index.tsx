import { Box } from '@chakra-ui/react';

import EmptyState from '@/components/info-states/EmptyState';
import ErrorState from '@/components/info-states/ErrorState';
import MediaCarousal from '@/components/media-carousal';
import useTrendingTvs from '@/pages/home/apis/useTrendingTvs';

const TrendingTvs = () => {
  const { data: trendingTvs, isLoading, isFetching, error, refetch } = useTrendingTvs();

  return (
    <Box>
      {error ? (
        <ErrorState title="Error" description="Failed to fetch trending tvs" onRetry={refetch} />
      ) : trendingTvs?.length === 0 ? (
        <EmptyState title="No trending tvs" description="No trending tvs found" />
      ) : (
        <MediaCarousal
          isLoading={isLoading}
          isFetching={isFetching}
          mediaType="tv"
          title="Trending TV Shows"
          data={trendingTvs || []}
        />
      )}
    </Box>
  );
};

export default TrendingTvs;
