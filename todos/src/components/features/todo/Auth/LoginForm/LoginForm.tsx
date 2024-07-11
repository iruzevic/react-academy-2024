'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { useUser } from "@/hooks/useUser";
import { Alert, Button, Flex, FormControl, FormLabel, Heading, Input, Text, chakra } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

interface ILoginFormInputs {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const {register, handleSubmit} = useForm<ILoginFormInputs>();

	const { mutate } = useUser();

	const { trigger } = useSWRMutation(swrKeys.login, mutator, {
		onSuccess: (data) => {
			mutate(data, {revalidate: false});
		}
	});

	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const onRegister = async(data: ILoginFormInputs) => {
		await trigger(data);
	}

	return (
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
				Activation
			</Heading>
			<Text>
				Please login to your account.
			</Text>

			<FormControl isRequired={true}>
				<FormLabel>Email</FormLabel>
				<Input {...register("email")} required type="email" />
			</FormControl>

			<FormControl isRequired={true}>
				<FormLabel>Password</FormLabel>
				<Input {...register("password")} required type="password" />
			</FormControl>

			<Button type="submit">
				Register
			</Button>
		</chakra.form>
	);
}
