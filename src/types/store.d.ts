import type { OsType } from "@tauri-apps/api/os";

export type Theme = "auto" | "light" | "dark";

export interface GlobalStore {
	theme: Theme;
	autoStart: boolean;
	wakeUpKey: string;
	appInfo?: { name: string; version: string };
	platform?: OsType;
}

export interface ClipboardStore {
	wakeUpKey: string;
	enableAudio?: boolean;
	capacity: number;
	activeIndex: number;
	windowPosition: "default" | "follow" | "center";
	doubleClickFeedback: "none" | "copy";
}
