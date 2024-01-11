import {Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


export default function Saveplaylist() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const saveClick = () => {


    }
    return (
        <>
            <div className="flex justify-center mb-3">
                <Button onPress={onOpen} className="bg-yellow-400 text-lg">Save Playlist</Button>
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="top-center"
                >
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Give your playlist a name</ModalHeader>
                                <ModalBody>
                                    <Input
                                        autoFocus
                                        label="Playlist name"
                                        placeholder="Enter your new playlist name"
                                        variant="bordered"
                                    />

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" variant="flat" onPress={saveClick}>
                                        Save
                                    </Button>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>

        </>
    )
}