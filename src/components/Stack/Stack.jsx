import { Backend } from './StackInfo/Backend'
import { Frontend } from './StackInfo/Frontend'
import { Methodologies } from './StackInfo/Methodologies'
import { Tools } from './StackInfo/Tools'

const groups = [
  { title: 'Backend', items: Backend },
  { title: 'Frontend', items: Frontend },
  { title: 'Herramientas', items: Tools },
  { title: 'Metodologías', items: Methodologies }
]

export const Stack = () => (
  <div className='flex flex-col gap-10'>
    {groups.map(group => (
      <div key={group.title}>
        <h3 className='mb-4 font-mono text-sm tracking-widest text-ink-faint uppercase'>{group.title}</h3>
        <ul className='flex flex-wrap gap-2'>
          {group.items.map(item => (
            <li
              key={item.name}
              className='flex items-center gap-2 rounded-full bg-accent-soft py-1.5 pr-3.5 pl-2 text-sm font-medium text-accent-ink'
            >
              <span className='flex size-6 items-center justify-center rounded-full bg-plate p-0.5 text-lg [&>*]:max-h-full [&>*]:max-w-full'>
                {item.icon}
              </span>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
