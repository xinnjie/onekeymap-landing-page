import Image from "next/image";
import EditorScreenshot from '@/public/images/screenshot-editor.png';
import SyncScreenshot from '@/public/images/screenshot-sync.png';
import ImportScreenshot from '@/public/images/screenshot-import.png';

export default function Features() {
  return (
    <section id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold">Everything you need to unify your workflow</h2>
            <p className="mt-4 text-lg text-gray-600">OneKeymap is packed with features to make your life easier.</p>
          </div>

          {/* Items */}
          <div className="space-y-12">

            {/* 1st item */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-gray-200/40 ring-1 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={EditorScreenshot}
                  alt="OneKeymap keymap editor screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                  priority
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Unified Keymap Editor</h4>
                  <p className="mt-3 text-lg text-gray-600">
                    Manage all your keybindings in one intuitive interface. Record, edit, and organize shortcuts with zero friction.
                  </p>
                </div>
              </div>
            </article>

            {/* 2nd item */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-gray-200/40 ring-1 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={SyncScreenshot}
                  alt="OneKeymap sync diff preview screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Safe Sync with Diff Preview</h4>
                  <p className="mt-3 text-lg text-gray-600">
                    Preview every change before you write to disk. Unified diffs highlight adds, edits, and removals so nothing slips through.
                  </p>
                </div>
              </div>
            </article>

            {/* 3rd item */}
            <article className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-gray-200/40 ring-1 ring-gray-100">
              <div className="relative aspect-[16/10] bg-gray-900">
                <Image
                  src={ImportScreenshot}
                  alt="OneKeymap import workflow screenshot"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
              </div>
              <div className="space-y-3 px-8 py-10 md:flex md:items-start md:gap-10 md:space-y-0">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Seamless Import</h4>
                  <p className="mt-3 text-lg text-gray-600">
                    Bring existing shortcuts from VS Code, IntelliJ IDEA, Zed, and more into OneKeymap with a single click.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}
