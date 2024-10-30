// animated-cursor.d.ts
declare module 'animated-cursor' {
	interface CursorOptions {
		color?: string
		outerAlpha?: number
		outerBorderSize?: number
		size?: {
			inner: number
			outer: number
		}
		hoverScale?: {
			inner: number
			outer: number
		}
		clickScale?: {
			inner: number
			outer: number
		}
		hideNativeCursor?: boolean
		cursorInnerSelector?: string
		cursorOuterSelector?: string
		cursorInnerStyles?: Record<string, string>
		cursorOuterStyles?: Record<string, string>
	}

	export default function AnimatedCursor(options: CursorOptions): {
		init: () => void
		destroy: () => void
	}
}
