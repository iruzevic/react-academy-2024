import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
	return (
		<Flex justifyContent={'space-between'} padding={3}>
			<Heading>Todos</Heading>
			<ButtonGroup>
				<Button href="/login" as={Link}>Login</Button>
				<Button href="/register" as={Link}>Register</Button>
			</ButtonGroup>
		</Flex>
	);
}
