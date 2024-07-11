'use client';

import { fetcher } from "@/fetchers/fetcher";
import { swrKeys } from "@/fetchers/swrKeys";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

interface IAuthRedirectProps {
	to: string;
	condition: 'isLoggedIn' | 'isLoggedOut';
}

export const AuthRedirect = ({to, condition}: IAuthRedirectProps) => {
	const router = useRouter();
	const {data, isLoading} = useUser();

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (!data && condition === 'isLoggedOut') {
			router.push(to);
		}

		if (data && condition === 'isLoggedIn') {
			router.push(to);
		}
	}, [data, condition, router, to, isLoading]);

	if (!data) {
		return <div>no data</div>;
	}

	return (
		<div>
			{data?.uuid}
		</div>
	)
}
