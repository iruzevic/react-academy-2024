'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { Alert, Button, Flex, FormControl, FormLabel, Heading, Input, Text, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

interface IRegisterFormInputs {
	email: string;
}

export const RegisterForm = () => {
	const [registered, setRegistered] = useState(false);
	const { register, handleSubmit} = useForm<IRegisterFormInputs>();

	const { trigger } = useSWRMutation(swrKeys.register, mutator, {
		onSuccess: () => {
			setRegistered(true);
		}
	})

	const onRegister = async(data: IRegisterFormInputs) => {
		await trigger(data);
	}

	return (
		<>
			{registered && <Alert status="success">Registered, check your email.</Alert>}
			{!registered && 
				<chakra.form
					direction="column"
					alignItems="center"
					gap={4}
					onSubmit={handleSubmit(onRegister)}
				>
					<Heading
						as="h2"
						size="lg"
					>
						Register
					</Heading>
					<Text>
						Welcome to the registration page. Please fill out the form below to create an account.
					</Text>

					<FormControl isRequired={true}>
						<FormLabel>Email</FormLabel>
						<Input {...register("email")} required type="email" />
					</FormControl>

					<Button type="submit">
						Register
					</Button>

				</chakra.form>
			}
		</>
	);
}
