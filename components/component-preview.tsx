import { Index } from "@/registry/__index__";
import { ComponentWrapper } from "@/components/component-wrapper";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import * as React from "react";
import Loader from "./layout/Loader";
import { ComponentSource } from "./component-source";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  preview?: boolean;
}

export function ComponentPreview({
  name,
  preview = false,
}: ComponentPreviewProps) {

  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;
    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }
    return <Component />;
  }, [name]);

  return (
    <Tabs defaultValue="preview">
      {!preview && (
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
      )}
      <TabsContent value="preview" className="">
        <ComponentWrapper name={name}>
          <React.Suspense
            fallback={
              <div className="flex items-center text-sm text-muted-foreground">
                <Loader />
              </div>
            }
          >
            {Preview}
          </React.Suspense>
        </ComponentWrapper>
      </TabsContent>
      <TabsContent value="code">
        <ComponentSource name={name} />
      </TabsContent>
    </Tabs>
  );
}
