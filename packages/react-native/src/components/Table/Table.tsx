import React from 'react';
import { View, Text, ScrollView, StyleSheet, type ViewProps, type TextProps } from 'react-native';
import { colors } from 'swiss-ui-tokens';

/* ─────────────────────────────────────────────────────────────
   Table — horizontally scrollable data table
───────────────────────────────────────────────────────────── */

export interface TableProps extends ViewProps {
  children?: React.ReactNode;
}

export function Table({ children, style, ...props }: TableProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableHeader
───────────────────────────────────────────────────────────── */

export interface TableHeaderProps extends ViewProps {
  children?: React.ReactNode;
}

export function TableHeader({ children, style, ...props }: TableHeaderProps) {
  return (
    <View style={[styles.header, style]} {...props}>
      {children}
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableBody
───────────────────────────────────────────────────────────── */

export interface TableBodyProps extends ViewProps {
  children?: React.ReactNode;
}

export function TableBody({ children, style, ...props }: TableBodyProps) {
  return (
    <View style={[styles.body, style]} {...props}>
      {children}
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableRow
───────────────────────────────────────────────────────────── */

export interface TableRowProps extends ViewProps {
  children?: React.ReactNode;
  striped?: boolean;
}

export function TableRow({ children, striped, style, ...props }: TableRowProps) {
  return (
    <View
      style={[
        styles.row,
        striped && styles.rowStriped,
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableHead — header cell
───────────────────────────────────────────────────────────── */

export interface TableHeadProps extends ViewProps {
  children?: React.ReactNode;
  width?: number;
}

export function TableHead({ children, width, style, ...props }: TableHeadProps) {
  return (
    <View style={[styles.head, width ? { width } : styles.headFlex, style]} {...props}>
      {typeof children === 'string' ? (
        <Text style={styles.headText}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableCell — body cell
───────────────────────────────────────────────────────────── */

export interface TableCellProps extends ViewProps {
  children?: React.ReactNode;
  width?: number;
}

export function TableCell({ children, width, style, ...props }: TableCellProps) {
  return (
    <View style={[styles.cell, width ? { width } : styles.cellFlex, style]} {...props}>
      {typeof children === 'string' ? (
        <Text style={styles.cellText}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}

/* ─────────────────────────────────────────────────────────────
   TableCaption
───────────────────────────────────────────────────────────── */

export interface TableCaptionProps extends TextProps {
  children?: React.ReactNode;
}

export function TableCaption({ children, style, ...props }: TableCaptionProps) {
  return (
    <Text style={[styles.caption, style]} {...props}>
      {children}
    </Text>
  );
}

/* ─────────────────────────────────────────────────────────────
   Styles
───────────────────────────────────────────────────────────── */

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: colors.panel,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  body: {
    backgroundColor: colors.canvas,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rowStriped: {
    backgroundColor: colors.panel,
  },
  head: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  headFlex: {
    minWidth: 120,
  },
  headText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: colors.ink,
  },
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  cellFlex: {
    minWidth: 120,
  },
  cellText: {
    fontFamily: 'Courier New',
    fontSize: 13,
    color: colors.ink,
  },
  caption: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: colors.muted,
    paddingHorizontal: 4,
    paddingTop: 8,
  },
});
