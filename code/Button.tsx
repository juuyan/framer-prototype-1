import * as React from "react"
import { Frame, useAnimation } from "framer"
import { primitives } from "./Primitives"
import { Plus, Minus } from "react-feather"

export function Button(props) {
    const { itemCount, changeItemCount } = props
    const aniControls = useAnimation()
    const variants = {
        primary: {
            default: {
                backgroundColor: primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 208,
                transition: primitives.transitions.fast,
            },
            pressing: {
                backgroundColor: primitives.color.brand,
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                transition: primitives.transitions.flash,
            },
            config: {
                backgroundColor: primitives.color.dark,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                width: 144,
                transition: primitives.transitions.fast,
            }
        },
        primaryIcon: {
            default: {
                opacity: 1,
                right: 24,
                top: 24,
                size: 0,
            },
            config: {
                opacity: 1,
                right: 0,
                top: 0,
                size: 48,
            }
        },
        secondary: {
            default: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 24,
                top: 24,
                size: 0,
                transition: primitives.transitions.fast,
            },
            pressingMinus: {
                shadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                transition: primitives.transitions.flash,
            },
            config: {
                opacity: 1,
                shadow: "0px 8px 16px rgba(0, 0, 0, 0.25)",
                left: 0,
                top: 0,
                size: 48,
                transition: primitives.transitions.fast,
            }
        },
        textPre: {
            default: {
                y: 0,
                opacity: 1,
            },
            config: {
                y: 48,
                opacity: 0,
            },
        }
    }
    aniControls.start(itemCount == 0 ? "default" : "config")
    return (
        <Frame
            name="Button"
            background="null"
            center
            height="100%"
            width={208}
            style={{
                fontFamily: "Open Sans"
            }}
        >
            <Frame
                name="Secondary Button"
                background="null"
                borderRadius={100}
                style={{
                    borderColor: primitives.color.dark,
                    borderStyle: "solid",
                    borderWidth: 2,
                }}
                animate={aniControls}
                initial={itemCount == 0 ? "default" : "pressing"}
                variants={variants.secondary}
                overflow="hidden"
                onTapStart={() => {
                    aniControls.start("pressingMinus")
                }}
                onTap={() => {
                    changeItemCount(-1)
                }}
            >
                <Frame name="Icon Frame" background="null" size={24} center>
                    <Minus />
                </Frame>
            </Frame>
            <Frame
                name="Primary Button"
                right={0}
                borderRadius={100}
                height="100%"
                animate={aniControls}
                initial={itemCount == 0 ? "default" : "pressing"}
                variants={variants.primary}
                onTapStart={() => {
                    aniControls.start("pressing")
                }}
                onTap={() => {
                    changeItemCount(1)
                }}
            >
                <Frame
                    name="Primary Button Icon"
                    background="null"
                    animate={aniControls}
                    initial={itemCount == 0 ? "default" : "config"}
                    variants={variants.primaryIcon}
                    transition={primitives.transitions.fast}
                    overflow="hidden"
                >
                    <Frame name="Icon Frame" background="null" size={24} center>
                        <Plus color="white" />
                    </Frame>
                </Frame>
            </Frame>
            <Frame
                name="Text Pre"
                background="null"
                // animate={aniControls}
                // initial="default"
                // transition={primitives.transitions.fast}
                // variants={variants.textPre}
                // overflow="hidden"
                color="white"
                height="100%"
                width="100%"
                // center
                style={{
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 24,
                }}
            >
                {itemCount == 0 ? "Add to Cart" : itemCount}
            </Frame>
        </Frame>
    )
}