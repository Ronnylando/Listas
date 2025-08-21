import Badge from "../assets/Componentes/badge";
import Button from "../assets/Componentes/button";
import ButtonIcon from "../assets/Componentes/button-icon";
import Card from "../assets/Componentes/card";
import Container from "../assets/Componentes/container";
import Icon from "../assets/Componentes/icon";
import InputCheckbox from "../assets/Componentes/input-checkbox";
import InputText from "../assets/Componentes/input-text";
import Skeleton from "../assets/Componentes/skeleton";
import Text from "../assets/Componentes/text";
import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinerIcon from "../assets/icons/spiner.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import xIcon from "../assets/icons/x.svg?react";
import PranchetaIcon from "../assets/icons/prancheta.svg?react";


export default function PageComponents() {
    return (
        <Container>
            <div className="grid gap-3">
                <div className="flex flex-col gap-2">
                    <Text variant="body-sm-bold" className="text-pink-base">Olá Mundo
                    </Text>
                    <Text className="text-green-base">Olá Mundo
                    </Text>
                    <Text variant="body-md-bold">Olá Mundo
                    </Text>
                    <Text >Levar a lisa para passear
                    </Text>
                </div>
                <div className="flex gap-1">
                    <Icon svg={TrashIcon} className="fill-pink-base" />
                    <Icon svg={CheckIcon} />
                    <Icon svg={PlusIcon} />
                    <Icon svg={SpinerIcon} animate />
                    <Icon svg={PencilIcon} />
                    <Icon svg={xIcon} />
                    <Icon svg={PranchetaIcon} />
                </div>

                <div className="flex gap-1">
                    <Badge variant="primary" >5</Badge>
                    <Badge variant="secondary" >2 de 5</Badge>
                    <Badge loading>5</Badge>
                </div>
                <div>
                    <Button icon={PlusIcon}>
                        Nova Tarefa
                    </Button>
                    <Button icon={PlusIcon} handling>
                        Criando...
                    </Button>

                </div>
                <div className="flex gap-1">
                    <ButtonIcon icon={TrashIcon} variant="secondary" />
                    <ButtonIcon icon={TrashIcon} />
                    <ButtonIcon icon={TrashIcon} variant="tertiary" />
                    <ButtonIcon icon={TrashIcon} loading />
                    <ButtonIcon icon={TrashIcon} handling />

                </div>
                <div>
                    <InputText />
                </div>
                <div>
                    <InputCheckbox />
                    <InputCheckbox loading />
                </div>
                <div>
                    <Card size="md"> ola mundo</Card>
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-6" />
                    <Skeleton className="h-6" />
                    <Skeleton className="w-96 h-6" />

                </div>
            </div>
        </Container>
    );
}