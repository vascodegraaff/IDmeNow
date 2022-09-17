import React from 'react';
import {
	Box,
	Flex,
	Center,
	VStack,
	Heading,
	Text,
} from '@chakra-ui/react';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';

function AdminScanStatusScrene({ verified }) {
	return (
		<>
			<Center>
				<VStack margin={'40'}>

					{verified ? <>
						<Heading
							textAlign="center"
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
							bgGradient="linear(to-r, green.200, green.500, purple.600)"
							bgClip={'text'}
							lineHeight={'110%'}>
							Successfully verified flyer
						</Heading>
						<CheckCircleIcon boxSize={'10rem'} color={'green.500'} />
					</> : <>
						<Heading
							textAlign="center"
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
							bgGradient="linear(to-r, orange.700, red.200, red.600)"
							bgClip={'text'}
							lineHeight={'110%'}>
							Failed to verify flyer
						</Heading>
						<Box display="inline-block">
							<Flex
								flexDirection="column"
								justifyContent="center"
								alignItems="center"
								bg={'red.500'}
								rounded={'10rem'}
								boxSize={'10rem'}
								textAlign="center">
								<CloseIcon boxSize={'x'} color={'white'} />
							</Flex>
						</Box>
					</>}
				</VStack>
			</Center>
		</>
	);
}

export default AdminScanStatusScrene;
