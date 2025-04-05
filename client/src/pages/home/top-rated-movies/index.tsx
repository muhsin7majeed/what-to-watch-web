import { Box } from '@chakra-ui/react';

import EmptyState from '@/components/info-states/EmptyState';
import ErrorState from '@/components/info-states/ErrorState';
import MediaCarousal from '@/components/media-carousal';
import useTopRatedMovies from '@/pages/home/apis/useTopRatedMovies';

const TopRatedMovies = () => {
  const { data: topRatedMovies, isLoading, isFetching, error, refetch } = useTopRatedMovies();

  return (
    <Box>
      {error ? (
        <ErrorState title="Error" description="Failed to fetch top rated movies" onRetry={refetch} />
      ) : topRatedMovies?.length === 0 ? (
        <EmptyState title="No top rated movies" description="No top rated movies found" />
      ) : (
        <MediaCarousal
          isLoading={isLoading}
          isFetching={isFetching}
          mediaType="movie"
          title="Top Rated Movies"
          data={topRatedMovies || []}
        />
      )}
    </Box>
  );
};

export default TopRatedMovies;
