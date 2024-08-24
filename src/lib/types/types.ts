export type PollDetailsScreenProps = {
  poll:
    | {
        id: number;
        question: string;
        options: string[];
      }
    | undefined;
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  vote: () => void;
};
