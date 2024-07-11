'use client'

import { LoginForm } from "@/components/features/todo/Auth/LoginForm/LoginForm";
import { AuthRedirect } from "@/components/shared/AuthRedirect/AuthRedirect";
import { Container } from "@chakra-ui/react";

export default function Login() {
	return (
		<>
			<AuthRedirect to='/' condition="isLoggedIn" />
			<Container
				backgroundColor="gray.50"
				alignItems="center"
			>
				<LoginForm />
			</Container>
		</>
	);
}
	