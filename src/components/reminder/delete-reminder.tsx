import {Button} from '../ui/button';
import {AiFillDelete} from "react-icons/ai";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ReminderType } from './reminder_def';

interface DeleteReminderProps {
  handleDelete: () => void,
  reminder?: ReminderType,
  reminderId: number
}

export default function DeleteReminder({handleDelete, reminder}:DeleteReminderProps) {
  

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button data-cy="delete-reminder-button" size='icon' variant='ghost' className='-mr-2'><AiFillDelete className='fill-sienna-400' size={20} /></Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete your reminder?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog >
  );
}