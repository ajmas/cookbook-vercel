import PageSpinner from "@/components/shared/page-spinner";
import RecipeCard from "@/components/shared/recipe-card";
import { HStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function RecipeList({ recipes }) {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    if (isLoading) {
        return (
            <PageSpinner />
        )
    }

    if (!recipes || recipes.length == 0) {
        const { t } = useTranslation('common');
        return <h1 className="text-center">{t('No recipes yet')}</h1>
    }
    else {
        return (
            <HStack className="container flex items-stretch">
                {recipes.map(
                    ({ _id, title, servings, time, tags, picture, source }) => {
                        return (
                            <RecipeCard
                                className=" h-full"
                                _id={_id}
                                title={title}
                                time={time}
                                servings={servings}
                                image={picture}
                                tags={tags}
                                key={_id}
                                setIsLoading={setIsLoading}
                            />
                        )
                    }
                )}
            </HStack>
        )
    }
}