import { ValueForm } from './ValueForm';
import { ValueList } from './ValueList';

export const ValueInfo = () => {
  return (
    <aside className="flex h-screen flex-2 flex-col border-r-2 p-5">
      <div className="flex-6">
        <ValueForm />
      </div>

      <div className="min-h-0 flex-4">
        <ValueList />
      </div>
    </aside>
  );
};
