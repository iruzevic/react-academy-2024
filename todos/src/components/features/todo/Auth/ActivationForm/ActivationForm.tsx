'use client'

import { mutator } from "@/fetchers/mutator";
import { swrKeys } from "@/fetchers/swrKeys";
import { Alert, Button, Flex, FormControl, FormLabel, Heading, Input, Text, chakra } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";

interface IActivationFormInputs {
	token: string;
	password: string;
}

export const ActivationForm = () => {
	const {register, handleSubmit} = useForm<IActivationFormInputs>();
	const [activated, setActivated] = useState(false);

	const { trigger } = useSWRMutation(swrKeys.activate, mutator, {
		onSuccess: () => {
			setActivated(true);
		}
	});

	const searchParams = useSearchParams();
	const token = searchParams.get('token');

	const onRegister = async(data: IActivationFormInputs) => {
		await trigger({
			password: data.password,
			token,
		});
	}

	return (
		<>
			{activated && <Alert status="success">Activated, go to login.</Alert>}
			{!activated && <chakra.form
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
						Please enter your password to activate your account.
					</Text>

					<FormControl isRequired={true}>
						<FormLabel>Password</FormLabel>
						<Input {...register("password")} required type="password" />
					</FormControl>

					<Button type="submit">
						Register
					</Button>

				</chakra.form>
			}
		</>
	);
}
