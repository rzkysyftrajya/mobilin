"use client";

import * as React from "react";
import { DollarSign, Check } from "lucide-react";
import { useCurrency } from "@/context/currency-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function CurrencySelector() {
  const { currency, setCurrency, availableCurrencies } = useCurrency();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <DollarSign className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableCurrencies.map((c) => (
          <DropdownMenuItem key={c.code} onClick={() => setCurrency(c.code)}>
             <Check className={cn("mr-2 h-4 w-4", currency === c.code ? "opacity-100" : "opacity-0")} />
            {c.code}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
