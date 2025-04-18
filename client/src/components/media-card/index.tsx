import { useGenreAtom } from '@/atoms/genreAtom';
import { Badge, Box, Flex, Image, Text } from '@chakra-ui/react';
import { HiStar } from 'react-icons/hi';

import { Movie, Tv } from '@/types/media';
import { formatDate } from '@/lib/dateFns';
import CustomLinkOverlay from '../CustomLinkOverlay';

interface MediaCardProps {
  media: Movie | Tv;
  mediaType: 'movie' | 'tv';
  isLink?: boolean;
}

const MediaCard = ({ media, mediaType, isLink = false }: MediaCardProps) => {
  const genreMap = useGenreAtom();

  const WrapperElement = isLink ? CustomLinkOverlay : Box;

  return (
    <WrapperElement
      flex="0 0 200px"
      height="300px"
      borderRadius="lg"
      transition="transform 0.2s"
      position="relative"
      to={`/app/media/${mediaType}/${media.id}`}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
        alt={mediaType === 'movie' ? (media as Movie).title : (media as Tv).name}
        width="100%"
        height="100%"
        objectFit="cover"
        borderRadius="lg"
      />

      <Badge position="absolute" top={2} left={2} variant="surface" colorPalette="blackAlpha">
        <HiStar />

        {media.vote_average.toFixed(1)}

        <Text fontSize="sm" color="gray.400">
          from {media.vote_count} votes
        </Text>
      </Badge>

      <Badge position="absolute" top={8} left={2} variant="subtle">
        {media.adult ? 'R' : 'PG-13'}
      </Badge>

      <Box position="absolute" bottom={0} left={0} right={0} bg="blackAlpha.700" p={2} color="white">
        <Text fontSize="md" fontWeight="bold" lineClamp={2}>
          {mediaType === 'movie' ? (media as Movie).title : (media as Tv).name} (
          {formatDate(mediaType === 'movie' ? (media as Movie).release_date : (media as Tv).first_air_date, 'YYYY')})
        </Text>

        <Flex gap={1} overflowX="auto" css={{ scrollbarWidth: 'none' }} my={1}>
          {media.genre_ids.map((genre) => (
            <Badge key={genre} variant="plain" colorPalette="cyan" mr={1}>
              {genreMap[genre]}
            </Badge>
          ))}
        </Flex>
      </Box>
    </WrapperElement>
  );
};

export default MediaCard;
