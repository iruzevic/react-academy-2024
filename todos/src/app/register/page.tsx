'use client'

import { RegisterForm } from "@/components/features/todo/Auth/RegisterForm/RegisterForm";
import { Container } from "@chakra-ui/react";

export default function Register() {
	return (
		<Container
			backgroundColor="gray.50"
			alignItems="center"
		>
			<RegisterForm />
		</Container>
	);
}
	