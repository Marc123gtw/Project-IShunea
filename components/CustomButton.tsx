"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, righyIcon }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType ||"button"}
            className={`custom-btn ${containerStyles}`
        }
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {righyIcon &&(
                <div className="relative w-6 h-6 ">
                    <Image
                    src={righyIcon} 
                    alt="right icon"
                    fill
                    className="object-contain"
                    />


                </div>
            )}
        </button>
    )
}

export default CustomButton;