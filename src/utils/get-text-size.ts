export type TextSize = "xs" | "sm" | "md" | "lg" | "xl"

export const getTextSize = (size: TextSize, defaultSize?: TextSize): string => {
    const sizeClass: Record<string, string> = {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl"
    }

    return sizeClass[size] || sizeClass[defaultSize || 'sm']
}