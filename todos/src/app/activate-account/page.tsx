'use client'

import { ActivationForm } from "@/components/features/todo/Auth/ActivationForm/ActivationForm"
import { Container } from "@chakra-ui/react";

export default function ActivateAccount() {
	return (
		<Container
			backgroundColor="gray.50"
			alignItems="center"
		>
			<ActivationForm />
		</Container>
	);
}
	