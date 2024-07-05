import { Button, ButtonGroup, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
	return (
		<Flex justifyContent={'space-between'} padding={3}>
			<Heading>Todos</Heading>
			<ButtonGroup>
				<Button>Login</Button>
				<Button>Register</Button>
			</ButtonGroup>
		</Flex>
	);
}
