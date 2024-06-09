import {
	type ShortcutHandler,
	register,
	unregister,
} from "@tauri-apps/api/globalShortcut";

export const useRegister = (handler: ShortcutHandler, deps: string[]) => {
	const [oldKey, setOldKey] = useState(deps[0]);

	useAsyncEffect(async () => {
		const [key] = deps;

		await unregister(oldKey);

		await register(key, handler);

		setOldKey(key);
	}, deps);
};